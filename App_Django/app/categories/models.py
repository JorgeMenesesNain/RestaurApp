from distutils.command.upload import upload
from turtle import title
from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.
class Category(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='categories')

    def __str__(self) :
        return self.title