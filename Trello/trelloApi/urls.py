from django.urls import include, path
from .views import *


urlpatterns = [
    path("boards/", getBoards, name="boards"),
    path("tables/", getTablas, name="tables"),
     path("tablas/<int:id>/", getTables, name="tablas"),
     path("cards/<int:id>/", getCards, name="cards"),

    path('api/', ObjetoCreateView.as_view(), name='objeto-create'),
    path('api/delete/<int:pk>/', BoardDeleteView.as_view(), name='objeto-create'),
    path('tablascreate/', TablesCreateView.as_view(), name='tabla-create'),
    path('cardscreate/', CardsCreateView.as_view(), name='tabla-create'),
    path('tabla/delete/<int:pk>/', TablaDeleteView.as_view(), name='objeto-create'),
    path('card/delete/<int:pk>/', CardDeleteView.as_view(), name='objeto-create'),
]
