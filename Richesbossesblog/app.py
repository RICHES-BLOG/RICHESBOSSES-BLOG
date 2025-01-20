from flask import Flask, request, redirect, url_for

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def submit_form():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']
    
    # Here you can add code to save the form data to a database or send an email
    
    return 'Form submitted successfully!'

if __name__ == '__main__':
    app.run(debug=True)
