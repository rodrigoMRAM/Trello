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

class CardsSerializer(ModelSerializer):
    class Meta:
        model = Cards
        fields = "__all__"


class ModificarSerializer(ModelSerializer):
    class Meta:
        model = Cards
        fields =["posicion"]