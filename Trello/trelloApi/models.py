from django.db import models

# Create your models here.
class Board(models.Model):
    nombre = models.CharField(max_length=50)

class Tables(models.Model):
    id = models.ForeignKey(Board, verbose_name="", on_delete=models.CASCADE)
    nombre = models.CharField(max_length=50)

class Cards(models.Model):
    nombre = models.CharField(max_length=50)
    posicion = models.CharField(max_length=50)
    color = models.CharField( max_length=50)
    