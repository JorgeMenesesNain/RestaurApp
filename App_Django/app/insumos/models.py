from django.db import models

# Create your models here.
MedidaStatus=(
    ("KILOGRAMOS", "kilogramos"),
    ("CAJAS", "cajas"),
    ("LITROS", "litros"),
)


class Insumos(models.Model):
    nombre =  models.CharField(max_length=255)
    cantidad = models.IntegerField()
    medida = models.CharField(max_length=255, choices=MedidaStatus, default="KILOGRAMOS")

    def __str__(self):
        return self.nombre