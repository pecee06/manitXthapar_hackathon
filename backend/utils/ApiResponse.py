class ApiResponse:
    def __init__(self, message: str, data: any):
        self.message = message
        self.data = data

    def to_dict(self):
        return {
            "message": self.message,
            "data": self.data
        }
