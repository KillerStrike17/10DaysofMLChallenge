# Day3 - Task 2

## Problem Statement

Analyze Toxicity of Comments.

## Requirements

`pip install tensorflow`
`pip install pandas`
`pip install numpy`
Configured TPU(Tensor Processing Unit)

## Dataset

The dataset used in this problem:

[Train set](https://www.dropbox.com/s/ggl9krhh6dcwhhz/train.csv)

[Test set](https://www.dropbox.com/s/tst2y6mzwzbhxo3/test.csv)

## Approach

* Split the data into training input and testing labels
* Load a pretrained Neural Embedding - Glove
* Develop a DNN.
* Run it over TPU.

## Results

**Model Parameters:** 1,146,516

**Train Accuracy:** 98.50%

**Test Accuracy:** 98.21%

