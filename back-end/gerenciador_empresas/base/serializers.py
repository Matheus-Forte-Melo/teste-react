from rest_framework.serializers import ModelSerializer
from . import models

class EmpresaSerializer(ModelSerializer):
    class Meta:
        model = models.Empresa
        fields = '__all__'