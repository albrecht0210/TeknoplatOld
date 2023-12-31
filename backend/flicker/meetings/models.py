from django.db import models

# Create your models here.
class Meeting(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    teacher_weight_score = models.DecimalField(max_digits=3, decimal_places=2, default=1)
    student_weight_score = models.DecimalField(max_digits=3, decimal_places=2, default=0)

    MODE_CHOICES = (
        ('asynchronous', 'Asynchronous'),
        ('synchronous', 'Synchronous')
    )

    mode = models.CharField(max_length=20, choices=MODE_CHOICES, default='synchronous')

    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('in_progress', 'In Progress'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    )

    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    course = models.PositiveBigIntegerField()
    # Uncomment after initial migration.
    presentors = models.ManyToManyField('pitches.Pitch')
    criterias = models.ManyToManyField('criterias.Criteria', through='criterias.MeetingCriteria')

    created_at = models.DateTimeField(auto_now_add=True) 
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    