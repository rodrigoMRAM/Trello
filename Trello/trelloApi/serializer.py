from rest_framework.serializers import ModelSerializer

from .models import *


class BoardSerializer(ModelSerializer):
    class Meta:
        model = Board
        fields = "__all__"

class TablesSerializer(ModelSerializer):
    class Meta:
        model = Tables
        fields = "__all__"