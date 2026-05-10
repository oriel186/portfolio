param(
  [string]$SourceDir = $PSScriptRoot,
  [int]$KeepLast = 30
)

$ErrorActionPreference = 'Stop'

if (-not (Test-Path -LiteralPath $SourceDir)) {
  throw "Source directory not found: $SourceDir"
}

$projectName = Split-Path -Path $SourceDir -Leaf
$backupRoot = Join-Path $SourceDir 'backups'
$stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$tempRoot = Join-Path $env:TEMP ("{0}_backup_{1}" -f $projectName, $stamp)
$archive = Join-Path $backupRoot ("{0}-{1}.zip" -f $projectName, $stamp)

New-Item -Path $backupRoot -ItemType Directory -Force | Out-Null
if (Test-Path -LiteralPath $tempRoot) { Remove-Item -LiteralPath $tempRoot -Recurse -Force }
New-Item -Path $tempRoot -ItemType Directory -Force | Out-Null

$excludeDirs = @('backups', '.git', 'node_modules', '.next', 'dist', 'build', 'coverage', '.cache')
$roboArgs = @(
  $SourceDir,
  $tempRoot,
  '/MIR',
  '/R:1',
  '/W:1',
  '/NFL',
  '/NDL',
  '/NJH',
  '/NJS',
  '/NP',
  '/XD'
) + $excludeDirs

& robocopy @roboArgs | Out-Null

if (Test-Path -LiteralPath $archive) { Remove-Item -LiteralPath $archive -Force }
Compress-Archive -Path (Join-Path $tempRoot '*') -DestinationPath $archive -CompressionLevel Optimal
Remove-Item -LiteralPath $tempRoot -Recurse -Force

$old = Get-ChildItem -Path $backupRoot -File -Filter "$projectName-*.zip" | Sort-Object LastWriteTime -Descending | Select-Object -Skip $KeepLast
if ($old) { $old | Remove-Item -Force }

Write-Host "Backup created: $archive"
