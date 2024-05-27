class SubscribersMixin:

    def increase_subscribers(self, count=1):
        self.subscribers_count += count
        self.save()

    def decrease_subscribers(self, count=1):
        if self.subscribers_count - count >= 0:
            self.subscribers_count -= count
        else:
            self.subscribers_count = 0
        self.save()
