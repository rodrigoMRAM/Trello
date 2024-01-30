from django.shortcuts import render
from .models import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import ModificarSerializer, TablesSerializer , BoardSerializer,CardsSerializer,ModificarColorSerializer
from rest_framework import generics
# Create your views here.


#SHOW BOARDS
@api_view(["GET"])
def getBoards(request):
    boards = Board.objects.all()
    serializar = BoardSerializer(boards, many=True)
    print(boards)
    return Response(serializar.data)

#SHOW TABLES
@api_view(["GET"])
def getTablas(request):
    tables = Tables.objects.all()
    serializar = TablesSerializer(tables, many=True)
    print(tables)
    return Response(serializar.data)

#SHOW TABLE BY ID
@api_view(["GET"])
def getTables(request,id):
    tables = Tables.objects.filter(identificacion=id)
    serializar = TablesSerializer(tables, many=True)
    print(tables)
    return Response(serializar.data)

#SHOW CARDS ITEMS BY POSITION
@api_view(["GET"])
def getCards(request,id):
    tables = Cards.objects.filter(id_tablas=id).order_by('posicion')
    serializar = CardsSerializer(tables, many=True)
    print(tables)
    return Response(serializar.data)


    

# BOARD CREATION

class ObjetoCreateView(generics.CreateAPIView):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer

#DELETE BOARDS

class BoardDeleteView(generics.DestroyAPIView):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer
#DELETE TABLE
class TablaDeleteView(generics.DestroyAPIView):
    queryset = Tables.objects.all()
    serializer_class = TablesSerializer
# DELETE CARDS
class CardDeleteView(generics.DestroyAPIView):
    queryset = Cards.objects.all()
    serializer_class = CardsSerializer

# TABLE CREATION
class TablesCreateView(generics.CreateAPIView):
    queryset = Tables.objects.all()
    serializer_class = TablesSerializer

# DETELE TABLE

class TablesDeleteView(generics.DestroyAPIView):
    queryset = Tables.objects.all()
    serializer_class = TablesSerializer

#CARD CREATION

class CardsCreateView(generics.CreateAPIView):
    queryset = Cards.objects.all()
    serializer_class = CardsSerializer
    def create(self, request, *args, **kwargs):
            ultimo_numero = Cards.objects.last()
            print(ultimo_numero)
            nuevo_valor = ultimo_numero.posicion + 1 if ultimo_numero else 1
            request.data['posicion'] = nuevo_valor
            response = super().create(request, *args, **kwargs)

            return response




# act
class CardsUpdateView(generics.UpdateAPIView):
    queryset = Cards.objects.all()
    serializer_class = ModificarSerializer

    def update(self, request, *args, **kwargs):
        # Obten el objeto que deseas actualizar
        instancia = self.get_object()
        print(instancia.posicion)
        # Modifica los valores según tus necesidades
        instancia.posicion = request.data.get('posicion', instancia.posicion)
        # Puedes agregar lógica adicional aquí para modificar otros campos

        # Guarda los cambios
        instancia.save()

        # Devuelve la respuesta
        serializer = self.get_serializer(instancia)
        return Response(serializer.data)
    
class CardsColorView(generics.UpdateAPIView):
    queryset = Cards.objects.all()
    serializer_class = ModificarColorSerializer

    def update(self, request, *args, **kwargs):
        # Obten el objeto que deseas actualizar
        instancia = self.get_object()
        print(instancia.color)
        # Modifica los valores según tus necesidades
        instancia.color = request.data.get('color', instancia.color)
        # Puedes agregar lógica adicional aquí para modificar otros campos

        # Guarda los cambios
        instancia.save()

        # Devuelve la respuesta
        serializer = self.get_serializer(instancia)
        return Response(serializer.data)