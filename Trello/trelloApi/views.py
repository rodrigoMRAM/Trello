from django.shortcuts import render
from .models import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import TablesSerializer , BoardSerializer
from rest_framework import generics
# Create your views here.

@api_view(["GET"])
def getBoards(request):
    boards = Board.objects.all()
    serializar = BoardSerializer(boards, many=True)
    print(boards)
    return Response(serializar.data)

@api_view(["GET"])
def getTables(request,id):
    tables = Tables.objects.filter(identificacion=id)
    serializar = TablesSerializer(tables, many=True)
    print(tables)
    return Response(serializar.data)


# BOARD CREATION

class ObjetoCreateView(generics.CreateAPIView):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer

#DELETE BOARDS

class ObjetoDeleteView(generics.DestroyAPIView):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer

class TablaDeleteView(generics.DestroyAPIView):
    queryset = Tables.objects.all()
    serializer_class = TablesSerializer

# TABLE CREATION
class TablesCreateView(generics.CreateAPIView):
    queryset = Tables.objects.all()
    serializer_class = TablesSerializer

# DETELE TABLE

class TablesDeleteView(generics.DestroyAPIView):
    queryset = Tables.objects.all()
    serializer_class = TablesSerializer
