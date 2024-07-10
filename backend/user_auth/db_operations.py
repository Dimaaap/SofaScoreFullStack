from .filters import EqualFilter

from django.core.exceptions import ObjectDoesNotExist


def get_data_from_model(model, field: str, value: str):
    eq_filter = EqualFilter()
    field = model.objects.get(**eq_filter(field, value))
    return field


def create_data_in_model_without_saving(model, **kwargs):
    return model.objects.create(**kwargs)


def create_data_in_model_with_saving(model, **kwargs):
    new_write = model.objects.create(**kwargs)
    new_write.save()
