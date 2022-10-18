from dataclasses import fields
from pyexpat import model
from rest_framework.serializers import ModelSerializer

from tables.models import Table


class TableSerializer(ModelSerializer):
    class Meta:
        model = Table
        fields = ['id','number']