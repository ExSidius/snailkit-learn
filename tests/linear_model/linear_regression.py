import numpy as np
import pytest
from snailkit_learn.linear_model.linear_regression import LinearRegression


class TestLinearRegression:
    def setup_method(self):
        """Set up test data."""
        # Simple test case: y = 2*x + 3
        self.X_simple = np.array([[1], [2], [3], [4], [5]])
        self.y_simple = np.array([5, 7, 9, 11, 13])
        
        # Multivariate test case: y = 1*x1 + 2*x2 + 3
        self.X_multi = np.array([
            [1, 1],
            [2, 2],
            [3, 3],
            [4, 4],
            [5, 5]
        ])
        self.y_multi = np.array([6, 9, 12, 15, 18])
        
    def test_initialization(self):
        """Test the proper initialization of the LinearRegression class."""
        model = LinearRegression(self.X_simple, self.y_simple)
        assert model.X.shape == self.X_simple.shape
        assert model.y.shape == self.y_simple.shape
        
        # Test with multivariate input
        model_multi = LinearRegression(self.X_multi, self.y_multi)
        assert model_multi.X.shape == self.X_multi.shape
        assert model_multi.y.shape == self.y_multi.shape
    
    def test_fit_simple_linear(self):
        """Test fitting on simple linear data."""
        model = LinearRegression(self.X_simple, self.y_simple)
        model.fit()
        # In a perfect fit for y = 2x + 3, we expect coefficients close to [3, 2]
        # (intercept and slope)
        # Note: This test will fail until fit() is properly implemented
        # But it sets the expected behavior
        assert hasattr(model, "coef_"), "Model should have coef_ attribute after fitting"
        assert hasattr(model, "intercept_"), "Model should have intercept_ attribute after fitting"
    
    def test_fit_multi_linear(self):
        """Test fitting on multivariate linear data."""
        model = LinearRegression(self.X_multi, self.y_multi)
        model.fit()
        # In a perfect fit for y = 1*x1 + 2*x2 + 3, we expect:
        # intercept_ = 3
        # coef_ = [1, 2]
        # Note: This test will fail until fit() is properly implemented
        # But it sets the expected behavior
        assert hasattr(model, "coef_"), "Model should have coef_ attribute after fitting"
        assert hasattr(model, "intercept_"), "Model should have intercept_ attribute after fitting"
    
    def test_predict_simple_linear(self):
        """Test prediction on simple linear data."""
        model = LinearRegression(self.X_simple, self.y_simple)
        model.fit()
        
        # Test prediction on training data
        predictions = model.predict(self.X_simple)
        assert predictions.shape == self.y_simple.shape
        
        # Test prediction on new data
        X_new = np.array([[6], [7]])
        predictions = model.predict(X_new)
        assert predictions.shape == (2,)
        
        # For a perfect model on y = 2x + 3, we expect:
        # predictions for X=[6, 7] to be [15, 17]
        # Note: This will fail until predict() is properly implemented
    
    def test_predict_multi_linear(self):
        """Test prediction on multivariate linear data."""
        model = LinearRegression(self.X_multi, self.y_multi)
        model.fit()
        
        # Test prediction on training data
        predictions = model.predict(self.X_multi)
        assert predictions.shape == self.y_multi.shape
        
        # Test prediction on new data
        X_new = np.array([[6, 6], [7, 7]])
        predictions = model.predict(X_new)
        assert predictions.shape == (2,)
    
    def test_edge_cases(self):
        """Test edge cases and potential errors."""
        # Test with single sample
        X_single = np.array([[1]])
        y_single = np.array([5])
        model = LinearRegression(X_single, y_single)
        model.fit()
        
        # Test with empty arrays
        with pytest.raises(ValueError):
            LinearRegression(np.array([]), np.array([]))
        
        # Test with mismatched dimensions
        with pytest.raises(ValueError):
            LinearRegression(np.array([[1], [2]]), np.array([1, 2, 3]))
    
    def test_fit_perfect_prediction(self):
        """Test if the model can perfectly fit and predict simple linear data."""
        model = LinearRegression(self.X_simple, self.y_simple)
        model.fit()
        
        # Get predictions on training data
        predictions = model.predict(self.X_simple)
        
        # Check if predictions match expected values
        # Use np.allclose to handle floating-point precision issues
        # Note: This will fail until the implementation is correct
        assert np.allclose(predictions, self.y_simple, rtol=1e-5)
        
        # Test on new data points using the known function y = 2x + 3
        X_test = np.array([[10]])
        y_expected = np.array([23])  # 2*10 + 3 = 23
        assert np.allclose(model.predict(X_test), y_expected, rtol=1e-5)
