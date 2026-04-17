Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("g:\Meu Drive\dnssociedade\LogoSemFundo-04.png")
$colors = @{}
for($x=0; $x -lt $bmp.Width; $x+=5){
    for($y=0; $y -lt $bmp.Height; $y+=5){
        $c = $bmp.GetPixel($x,$y)
        if($c.A -gt 50){
            $hex = '#{0:X2}{1:X2}{2:X2}' -f $c.R, $c.G, $c.B
            $colors[$hex]++
        }
    }
}
$colors.GetEnumerator() | Sort-Object Value -Descending | Select-Object -First 5
