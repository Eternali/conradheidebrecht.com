#!/usr/bin/python3

'''
api.py

Author: Conrad Heidebrecht,    19 June 2017,    v. 0.1
'''

import smtplib, re
from flask import Flask

app = Flask(__name__)

@app.route('sendemail')
def send_email():
    addrpattern = re.compile('[^@]+@[^@]+\.[^@]+')
    email = """
    
    """

    try:
        if not emailpattern.match():
            raise TypeError
        smtp = smtplib.SMTP('localhost')
        smtp.sendmail()
        print()
    except TypeError:
        print()
    except:
        print()

if __name__ == '__main__':
    app.run()