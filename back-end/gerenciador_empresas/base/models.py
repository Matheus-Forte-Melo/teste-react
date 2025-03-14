from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Empresa(models.Model):
    cnpj = models.CharField(max_length=30)
    nome = models.CharField(max_length=100)
    nome_f = models.CharField(max_length=100,null=True, blank=True, default="")
    contato = models.CharField(max_length=30, null=False, blank=False, default="")
    email = models.EmailField(max_length=100)
    cep = models.CharField(max_length=15)
    pais = models.CharField(max_length=15)
    estado = models.CharField(max_length=30)
    cidade = models.CharField(max_length=30)
    bairro = models.CharField(max_length=30)
    rua = models.CharField(max_length=100)
    numero = models.CharField(max_length=15)
    complemento = models.CharField(max_length=30, null=True, blank=True, default="")

