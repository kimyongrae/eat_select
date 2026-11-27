#!/usr/bin/env python3
"""같은 Wi-Fi의 휴대폰에서도 접속되는 로컬 서버.
사용: python3 serve.py [포트]   (기본 8000)
"""
import http.server, socketserver, socket, sys, os

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
os.chdir(os.path.dirname(os.path.abspath(__file__)))

def lan_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(("8.8.8.8", 80)); return s.getsockname()[0]
    except OSError:
        return "내-IP"
    finally:
        s.close()

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

socketserver.TCPServer.allow_reuse_address = True
with socketserver.ThreadingTCPServer(("0.0.0.0", PORT), Handler) as httpd:
    ip = lan_ip()
    print(f"PC     : http://localhost:{PORT}")
    print(f"모바일 : http://{ip}:{PORT}   (같은 Wi-Fi)")
    print(f"카카오 개발자 콘솔 > JavaScript SDK 도메인에 http://{ip}:{PORT} 를 등록하세요")
    httpd.serve_forever()
