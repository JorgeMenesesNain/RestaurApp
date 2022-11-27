from django.contrib import admin
from insumos.models import Insumos

# Register your models here.
@admin.register(Insumos)
class InsumosAdmin(admin.ModelAdmin):
    list_display = ['id', 'nombre', 'cantidad',
                    'medida']