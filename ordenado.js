// Função para trocar os valores de duas posições de um vetor
const swap = (array, pos1, pos2) => {
    const temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
};

// Função para embaralhar os elementos de um vetor
const shuffle = (array, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
        const randomIndex1 = Math.floor(Math.random() * array.length);
        const randomIndex2 = Math.floor(Math.random() * array.length);
        swap(array, randomIndex1, randomIndex2);
    }
};

// Função para ordenar um vetor de inteiros com o algoritmo Bubble Sort
const bubble_sort = (array) => {
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
};

// Função para ordenar um vetor de inteiros utilizando o algoritmo Selection Sort
const selection_sort = (array) => {
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (min !== i) {
            swap(array, i, min);
        }
    }
};

// Função para ordenar um vetor de inteiros com o algoritmo Quick Sort
const quick_sort = (array, left, right) => {
    if (left < right) {
        const pivot = partition(array, left, right);
        quick_sort(array, left, pivot - 1);
        quick_sort(array, pivot + 1, right);
    }
};

// Função de apoio a quick_sort para particionamento do vetor
const partition = (array, left, right) => {
    const pivot = array[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, right);
    return i + 1;
};