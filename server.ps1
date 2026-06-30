$folder = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = 8000

$server = New-Object System.Net.HttpListener
$server.Prefixes.Add("http://localhost:$port/")
$server.Start()

Write-Host "Servidor rodando em http://localhost:$port/" -ForegroundColor Green
Write-Host "Pressione Ctrl+C para parar." -ForegroundColor Yellow

try {
    while ($true) {
        $context = $server.GetContext()
        $request = $context.Request
        $response = $context.Response

        $path = $request.Url.AbsolutePath
        if ($path -eq "/") { $path = "/index.html" }

        $filePath = Join-Path $folder $path.TrimStart('/')
        
        if (Test-Path $filePath -PathType Leaf) {
            $content = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $content.Length
            
            $ext = [System.IO.Path]::GetExtension($filePath)
            $mimeTypes = @{
                ".html" = "text/html"
                ".css" = "text/css"
                ".js" = "application/javascript"
                ".json" = "application/json"
            }
            $response.ContentType = if ($mimeTypes[$ext]) { $mimeTypes[$ext] } else { "text/plain" }
            
            $response.OutputStream.Write($content, 0, $content.Length)
            $response.StatusCode = 200
        } else {
            $response.StatusCode = 404
        }
        
        $response.Close()
    }
} finally {
    $server.Stop()
}
