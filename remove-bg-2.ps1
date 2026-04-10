param(
    [string]$inPath,
    [string]$outPath
)
Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Image]::FromFile($inPath)
$bmp = New-Object System.Drawing.Bitmap($img)
$width = $bmp.Width
$height = $bmp.Height

for ($y = 0; $y -lt $height; $y++) {
    for ($x = 0; $x -lt $width; $x++) {
        $p = $bmp.GetPixel($x, $y)
        
        # se R, G, B > 235 (quase branco puro), torne 100% transparente:
        if ($p.R -ge 245 -and $p.G -ge 245 -and $p.B -ge 245) {
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        }
        # bordas anti-aliased
        elseif ($p.R -ge 235 -and $p.G -ge 235 -and $p.B -ge 235) {
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(128, $p.R, $p.G, $p.B))
        }
        # pixels mais internos do logo que possam ser claros, mas o logo é coral.
    }
}
$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$img.Dispose()
