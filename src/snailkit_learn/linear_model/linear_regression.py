import numpy as np
from snailkit_learn.base import BaseSupervisedModel

class LinearRegression(BaseSupervisedModel):
    def __init__(self, X: np.ndarray, y: np.ndarray):
        super().__init__(X, y)

    def fit(self):
        pass

    def predict(self, X: np.ndarray) -> np.ndarray:
        pass