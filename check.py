from flask import Flask, request, jsonify
from flask_cors import CORS
import re

app = Flask(__name__)
CORS(app)

def check_password_strength(password):
    if len(password) < 8:
        return "❌ Muy corta (mínimo 8 caracteres)"
    if not re.search(r"[A-Z]", password):
        return "❌ Falta una mayúscula"
    if not re.search(r"[0-9]", password):
        return "❌ Falta un número"
    if not re.search(r"[!@#$%^&*]", password):
        return "❌ Falta un carácter especial"
    return "✅ Contraseña segura"

@app.route('/check', methods=['POST'])
def check():
    data = request.json
    password = data.get('password', '')
    result = check_password_strength(password)
    return jsonify({ "message": result })

if __name__ == '__main__':
    app.run(debug=True)
