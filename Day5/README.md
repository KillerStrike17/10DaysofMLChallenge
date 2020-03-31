# Day5

## Problem Statement

To classify dogs and cats.

## Requirements

`pip install tensorflow`
`pip install matplitlib`
`pip install scipy`
`pip numpy`

## Approach

### Using Transfer Learning

* Model Used is Resnet 50 Model trained over imagenet Dataset
* Froze the complete model except the last two layer
* created an image gallery for Misclassified Images
* Used Attension maps to identity firing neurons.

### Using Custom Model




## Dataset

The Dataset can be found here : [Link](https://storage.googleapis.com/mledu-datasets/cats_and_dogs_filtered.zip)

## Results

### Transfer Learning:

* Model Parameters: 23,568,485
* Train Accuracy:98.09%
* Test Accuracy: 99.20%

### Custom Model:

* Model Parameters: 
* Train Accuracy:
* Test Accuracy: 

## Output Visualization

**Input Data:**

![InputImageGallery](Assets/Input_image.jpg)

**Misclassified Images:**

![Misclassified Images](Assets/Misclassified_images.jpg)

**GradCAM Output:**

![GradCAM](Assets/GradCAM_output.jpg)
