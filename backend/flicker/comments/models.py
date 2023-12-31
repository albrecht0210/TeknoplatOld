from django.db import models
from django.contrib.auth import get_user_model

Account = get_user_model()

# Create your models here.
class Comment(models.Model):
    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    comment = models.TextField()
    # Uncomment after initial migration.
    meeting = models.ForeignKey('meetings.Meeting', on_delete=models.CASCADE)
    team = models.PositiveBigIntegerField(null=True, blank=True)
    everyteam = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True) 
    updated_at = models.DateTimeField(auto_now=True)
    