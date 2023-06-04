from wtforms import Form
from wtforms import StringField, TextFiel
from wtforms.fields.html5 import EmailField

class CommentForm(Form):
    username = StringField ("Nombre")
    tel = StringField ("Telefono")
    email = EmailField ("Email")
    comment = TextFiel ("Mensaje")