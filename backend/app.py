from flask import Flask, jsonify, request
import requests

app = Flask(__name__)

@app.route('/', methods = ['GET', 'POST'])
def home():
  if (request.method == "GET"):
    data = requests.get('https://www.googleapis.com/youtube/v3/search')
    return jsonify({'data': data})
  
if __name__ == '__main__':
  app.run(debug=True, port=5000)


# https://www.youtube.com/watch?v=4RIkc330cZc