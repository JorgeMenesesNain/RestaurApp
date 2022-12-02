from django.db import models
from django.contrib.auth.models import AbstractUser

StatusRol = (
    ("ADMIN", "admin"),
    ("BODEGA", "bodega"),
    ("FINANZAS", "finanzas"),
    ("COCINA", "cocina"),
    ("GARZON", "garzon"),
)

class User(AbstractUser):
    rol = models.CharField(max_length=255, choices=StatusRol)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
