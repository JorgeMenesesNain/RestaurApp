from rest_framework.routers import DefaultRouter

from insumos.api.views import InsumosApiViewSet

router_insumos = DefaultRouter()

router_insumos.register(
    prefix='insumos', basename='insumos', viewset=InsumosApiViewSet
)