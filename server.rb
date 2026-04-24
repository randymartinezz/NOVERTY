require 'socket'
require 'uri'

MIME = {
  '.html' => 'text/html',
  '.css'  => 'text/css',
  '.js'   => 'application/javascript',
  '.png'  => 'image/png',
  '.jpg'  => 'image/jpeg',
  '.svg'  => 'image/svg+xml',
}

root = File.expand_path(File.dirname(__FILE__))
server = TCPServer.new('0.0.0.0', 8090)
$stdout.puts "Serving on http://localhost:8090"
$stdout.flush

loop do
  client = server.accept
  request = client.gets
  next client.close unless request
  path = URI.decode_www_form_component(request.split(' ')[1] || '/')
  path = '/index.html' if path == '/'
  file = File.join(root, path)
  if File.exist?(file) && !File.directory?(file)
    ext = File.extname(file)
    mime = MIME[ext] || 'application/octet-stream'
    body = File.binread(file)
    client.print "HTTP/1.1 200 OK\r\nContent-Type: #{mime}\r\nContent-Length: #{body.bytesize}\r\nConnection: close\r\n\r\n"
    client.print body
  else
    client.print "HTTP/1.1 404 Not Found\r\nContent-Type: text/plain\r\nConnection: close\r\n\r\n404"
  end
  client.close
end
