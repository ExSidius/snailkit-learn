import numpy as np

class BaseSupervisedModel:
    def __init__(self, X: np.ndarray, y: np.ndarray):
        self.X = X
        self.y = y

    def fit(self):
        pass