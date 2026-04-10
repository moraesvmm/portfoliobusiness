param(
    [string]$inPath,
    [string]$outPath
)

Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Image]::FromFile($inPath)
$bmp = New-Object System.Drawing.Bitmap($img)

$width = $bmp.Width
$height = $bmp.Height

# We will check pixels. If they are close to white, we make them transparent.
# To avoid hard halos, we can scale the alpha for pixels between, say, 230 to 255.
for ($y = 0; $y -lt $height; $y++) {
    for ($x = 0; $x -lt $width; $x++) {
        $p = $bmp.GetPixel($x, $y)
        
        $r = $p.R
        $g = $p.G
        $b = $p.B
        
        $avg = ($r + $g + $b) / 3
        
        if ($avg -ge 250) {
            # perfectly white background -> completely transparent
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 255, 255, 255))
        }
        elseif ($avg -ge 230 -and $r -ge 220 -and $g -ge 220 -and $b -ge 220) {
            # anti-aliased edge -> partial transparency
            # $avg is 230 (alpha = 255) to 250 (alpha = 0)
            # fraction = (250 - avg)/20  -> alpha = fraction * 255
            $alpha = [math]::Floor(((250 - $avg) / 20.0) * 255)
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $r, $g, $b))
        }
    }
}

$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$img.Dispose()
