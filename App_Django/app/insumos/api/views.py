from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly


from insumos.models import Insumos
from insumos.api.serializers import InsumosSerializer


class InsumosApiViewSet(ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = InsumosSerializer
    queryset = Insumos.objects.all()

