from django.urls import path
from . import views

urlpatterns = [
    path('pegar-empresas', views.pegar_empresas, name="pegar-empresas"),
    path('cadastrar-empresa', views.adicionar_empresa, name="cadastrar-empresa"),
    path('remover-empresa/<int:pk>/', views.deletar_empresa, name="remover-empresa")
]