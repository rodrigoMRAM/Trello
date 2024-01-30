from django.db import models

# Create your models here.
class Board(models.Model):
    nombre = models.CharField(max_length=50)
    def __str__(self):
        return self.nombre
    

class Tables(models.Model):
    nombre = models.CharField(max_length=50,verbose_name="nombre")
    identificacion = models.ForeignKey(Board, on_delete=models.CASCADE)
    def __str__(self):
        return f'{self.id} {self.identificacion} {self.nombre}'
    

class Cards(models.Model):
    id_tablas = models.ForeignKey(Tables, verbose_name="", on_delete=models.CASCADE)
    nombre = models.CharField(max_length=200)
    posicion = models.IntegerField(default=1)
    color = models.CharField( max_length=50, null=True, blank=True)

    def __str__(self):
        return f' {self.id}  {self.id_tablas} {self.posicion}{self.color}{self.nombre}'
    