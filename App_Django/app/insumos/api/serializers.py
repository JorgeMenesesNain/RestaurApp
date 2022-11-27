from rest_framework.serializers import ModelSerializer

from insumos.models import Insumos


class InsumosSerializer(ModelSerializer):

    class Meta:
        model = Insumos
        fields = ['id', 'nombre', 'cantidad', 'medida']
