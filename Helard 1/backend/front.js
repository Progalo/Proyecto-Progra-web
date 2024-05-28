document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/products')
        .then(response => response.json())
        .then(data => {
            const productsContainer = document.getElementById('products');
            data.forEach(brand => {
                const brandElement = document.createElement('div');
                brandElement.classList.add('brand');

                const brandName = document.createElement('h2');
                brandName.textContent = brand.nombre;
                brandElement.appendChild(brandName);

                brand.modelos.forEach(product => {
                    const productElement = document.createElement('div');
                    productElement.classList.add('product');
                    productElement.innerHTML = `
                        <img src="${product.imagen}" alt="${product.Serie}">
                        <h3>${product.Serie}</h3>
                        <p>${product.Descripcion}</p>
                        <p>Price: $${product.precio}</p>
                        <p>Stock: ${product.stock}</p>
                    `;
                    brandElement.appendChild(productElement);
                });

                productsContainer.appendChild(brandElement);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});
