from django.urls import include, path
from .views import *


urlpatterns = [
    path("boards/", getBoards, name="boards"),
     path("tablas/<int:id>/", getTables, name="tablas"),

    path('api/', ObjetoCreateView.as_view(), name='objeto-create'),
    path('api/delete/<int:pk>/', ObjetoDeleteView.as_view(), name='objeto-create'),
    path('tablascreate/', TablesCreateView.as_view(), name='tabla-create'),
    path('tabla/delete/<int:pk>/', TablaDeleteView.as_view(), name='objeto-create'),
]
