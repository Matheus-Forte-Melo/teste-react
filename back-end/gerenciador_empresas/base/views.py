import requests
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from . import serializers
from . import models

# Create your views here.
@api_view(['GET'])
def pegar_empresas(request):
    empresas = models.Empresa.objects.all()
    serializer = serializers.EmpresaSerializer(empresas, many=True)
    return Response(serializer.data, status.HTTP_200_OK)

@api_view(['GET'])
def pegar_empresa(request):
    pass

@api_view(['POST'])
def adicionar_empresa(request):
    serializer = serializers.EmpresaSerializer(data=request.data)
    if serializer.is_valid():
        cnpj_valido =  validar_cpnj(serializer.validated_data.get("cnpj"))
        if not cnpj_valido[0]:
            return Response({"Erro ao validar CNPJ": cnpj_valido[1]})

        serializer.save()
        return Response(serializer.data, status.HTTP_201_CREATED)
    return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)

def validar_cpnj(cnpj):
    cnpj = ''.join(filter(str.isdigit, cnpj)) # Vai dar join somente no que for digito.

    if len(cnpj) != 14:
        return False, "CNPJ inválido"
    
    url = f"https://www.receitaws.com.br/v1/cnpj/{cnpj}"

    try:
        response = requests.get(url)
        data = response.json()

        if data.get("status") == "ERROR": 
            return False, "CNPJ inválido ou não encontrado na Receita Federal."
        
        return True, data
    except requests.RequestException:
        return False, "Erro de API"


@api_view(['DELETE'])
def deletar_empresa(request, pk):
    try:
        empresa = models.Empresa.objects.get(id=pk)
        empresa.delete()
        return Response({"Sucesso": f"Empresa {empresa.nome} deletada com sucesso"}, status.HTTP_200_OK)
    except models.Empresa.DoesNotExist:
        return Response({"Erro": "Empresa não consta no banco de dados."}, status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def atualizar(request):
    pass