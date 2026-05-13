from flask import Blueprint
from flask_cors import CORS
from . import controllers

main_bp = Blueprint('main', __name__)
CORS(main_bp, resources={r"/*": {"origins": "*"}}) 

# Route to display the safety prediction
@main_bp.route('/predict_safety', methods=['POST'])
def predict_safety():
    return controllers.predict_safety()

# Route to get recommendations
@main_bp.route('/get_recommendation', methods=['POST'])
def get_recommendation():
    return controllers.get_recommendation()

# Route to visualize the safety map
@main_bp.route('/visualize_map')
def visualize_map():
    return controllers.visualize_map()

# Route to display the heatmap
@main_bp.route('/heatmap')
def heatmap():
    return controllers.heatmap()

# Route to display feature importance
@main_bp.route('/feature_importance')
def feature_importance_chart():
    return controllers.feature_importance_chart()