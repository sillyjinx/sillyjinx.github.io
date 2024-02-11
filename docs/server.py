from flask import Flask, render_template
import uuid

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate_api_key')
def generate_api_key():
    api_key = str(uuid.uuid4())
    with open('auth/api_keys.txt', 'a') as f:
        f.write(api_key + '\n')
    return api_key

@app.route('/authenticate_with_key')
def authenticate_with_key():
    api_key = request.args.get('api_key')
    with open('auth/api_keys.txt', 'r') as f:
        valid_keys = [line.strip() for line in f]

    return 'OK' if api_key in valid_keys else 'Unauthorized', 200 if api_key in valid_keys else 401

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
