document.addEventListener("DOMContentLoaded", () => {
  // Product data with updated images
  const products = [
    {
      id: 1,
      name: "VR Headset Pro",
      description:
        "Premium VR headset with high resolution display and comfortable fit.",
      price: 140000,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/product-1%20echo.jpg-ug9UzbD0cwAOOaFwNWjzzwj2y1OoUp.jpeg",
      category: "vr",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Omni VR Treadmill",
      description:
        "360-degree movement platform for immersive VR gaming experience.",
      price: 850000,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aksesorisvr-2.jpeg.jpg-fRJ3dyRhC6QIfNORvQ2GGA93RqetvD.webp",
      category: "aksesoris",
      rating: 4.6,
    },
    {
      id: 3,
      name: "VR Motion Controllers",
      description: "Precision controllers for VR gaming with haptic feedback.",
      price: 950000,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/controllervr-2.jpeg.jpg-URiiurv6PtfAUrczV9cwQS3gmH0nB7.webp",
      category: "controller",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Compact VR Headset",
      description:
        "Lightweight VR headset with wide field of view and built-in audio.",
      price: 110000,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/product-2%20echo.jpg-XcRDY2g3wbVKgWnBsvzNOvZw1nh9U1.jpeg",
      category: "vr",
      rating: 4.9,
    },
    {
      id: 5,
      name: "CaptoGlove VR Gloves",
      description:
        "Haptic feedback gloves for realistic hand tracking in virtual reality.",
      price: 150000,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aksesorisvr-1.jpeg.jpg-s7ED5vtFijyZz7w1iTgZCWRHA35zKQ.webp",
      category: "aksesoris",
      rating: 4.8,
    },
    {
      id: 6,
      name: "Portable VR Headset",
      description: "Compact VR headset with controller for mobile gaming.",
      price: 920000,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/product-4%20echo.jpg-zbrjhy1xmRwylahqzwTzenWYRv5d23.jpeg",
      category: "vr",
      rating: 4.7,
    },
    {
      id: 7,
      name: "Wireless VR Controller",
      description:
        "Single-handed wireless controller for VR gaming and navigation.",
      price: 450000,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/controllervr-1.jpeg.jpg-tzcyWyVLrg5vzai3wX020mkO9iR6IX.jpeg",
      category: "controller",
      rating: 4.7,
    },
    {
      id: 8,
      name: "VR Development Kit",
      description:
        "Complete VR development kit with controllers and tracking system.",
      price: 385000,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aksesorisvr-3.jpeg.jpg-AovdojZ5zNHY89W223anOXR62wXZ3N.webp",
      category: "aksesoris",
      rating: 4.7,
    },
    {
      id: 9,
      name: "Premium VR Headset",
      description:
        "High-end VR headset with enhanced comfort and display quality.",
      price: 185000,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/product-3%20echo.jpg-AGmdUrWDfVlbnAulr1N9ElGy9lm3Ac.jpeg",
      category: "vr",
      rating: 4.9,
    },
    {
      id: 10,
      name: "PlayStation VR Controllers",
      description:
        "Official PlayStation VR controllers with precision tracking.",
      price: 125000,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/psvr%20%281%29.jpg-CGpKHHG4nzaWYwM31djokiFRMYYFml.jpeg",
      category: "controller",
      rating: 4.8,
    },
  ];

  // DOM Elements
  const cartButton = document.getElementById("cart-button-filter");
  const cartOverlay = document.getElementById("cart-overlay");
  const cartSidebar = document.getElementById("cart-sidebar");
  const closeCartButton = document.getElementById("close-cart");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartSummaryContainer = document.getElementById("cart-summary");
  const cartCountElement = document.getElementById("cart-count-filter");
  const searchInput = document.getElementById("search-input");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const productsGrid = document.getElementById("products-grid");

  // Payment Elements
  const marketplaceContainer = document.body;
  const paymentContainer = document.getElementById("payment-container");
  const backToShopButton = document.getElementById("back-to-shop");
  const completePaymentButton = document.getElementById("complete-payment");
  const orderItemsContainer = document.getElementById("order-items");
  const orderSummaryContainer = document.getElementById("order-summary");

  // Payment Form Elements
  const paymentMethods = document.querySelectorAll('input[name="payment"]');
  const cardDetails = document.getElementById("card-details");
  const cardNumberInput = document.getElementById("card-number");
  const expiryDateInput = document.getElementById("expiry-date");
  const cvvInput = document.getElementById("cvv");
  const cardholderNameInput = document.getElementById("cardholder-name");

  // Add these two new form groups after it:
  const fullNameInput = document.getElementById("full-name");
  const emailAddressInput = document.getElementById("email-address");

  // Display elements
  const displayCardNumber = document.getElementById("display-card-number");
  const displayExpiry = document.getElementById("display-expiry");
  const displayName = document.getElementById("display-name");

  // Popup elements
  const popupOverlay = document.getElementById("popup-overlay");
  const popupIcon = document.getElementById("popup-icon");
  const popupTitle = document.getElementById("popup-title");
  const popupMessage = document.getElementById("popup-message");
  const popupCancel = document.getElementById("popup-cancel");
  const popupConfirm = document.getElementById("popup-confirm");
  const popupActions = document.getElementById("popup-actions");

  // Success animation
  const successAnimation = document.getElementById("success-animation");

  // Cart state
  let cart = [];
  let activeCategory = "all";
  let searchTerm = "";

  // User login state (simulate login status)
  let isUserLoggedIn = false; // Set to false to simulate not logged in

  // Format price - Changed from IDR to USD
  function formatPrice(price) {
    // Convert from IDR-like numbers to USD (divide by 1000 for reasonable USD prices)
    const usdPrice = price / 1000;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(usdPrice);
  }

  // Render products
  function renderProducts() {
    const filteredProducts = products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    productsGrid.innerHTML = "";

    filteredProducts.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
          <div class="product-header">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-rating">${"★".repeat(
              Math.floor(product.rating)
            )}</div>
          </div>
          <p class="product-description">${product.description}</p>
          <div class="product-footer">
            <span class="product-price">${formatPrice(product.price)}</span>
            <button class="add-to-cart" data-id="${product.id}">
              <span class="btn-text">Add to Cart</span>
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
            </button>
          </div>
        </div>
      `;
      productsGrid.appendChild(productCard);
    });
  }

  // Add to cart
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    const existingItem = cart.find((item) => item.id === productId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    openCart();
  }

  // Remove from cart
  function removeFromCart(productId) {
    cart = cart.filter((item) => item.id !== productId);
    updateCartUI();
  }

  // Update quantity
  function updateQuantity(productId, newQuantity) {
    if (newQuantity === 0) {
      removeFromCart(productId);
      return;
    }

    const item = cart.find((item) => item.id === productId);
    if (item) {
      item.quantity = newQuantity;
      updateCartUI();
    }
  }

  // Update cart UI
  function updateCartUI() {
    // Update cart count
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = cartCount;

    if (cartCount === 0) {
      cartCountElement.classList.remove("show");
    } else {
      cartCountElement.classList.add("show");
    }

    if (cart.length === 0) {
      cartItemsContainer.innerHTML =
        '<div class="cart-empty">Your cart is empty</div>';
      cartSummaryContainer.innerHTML = "";
      return;
    }

    // Render cart items
    cartItemsContainer.innerHTML = "";
    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";
      cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-content">
          <h4 class="cart-item-title">${item.name}</h4>
          <div class="cart-item-quantity">
            <button class="quantity-btn decrease" data-id="${
              item.id
            }">-</button>
            <span class="quantity-value">${item.quantity}</span>
            <button class="quantity-btn increase" data-id="${
              item.id
            }">+</button>
          </div>
        </div>
        <div class="cart-item-price">
          <div class="item-price">${formatPrice(
            item.price * item.quantity
          )}</div>
          <button class="remove-item" data-id="${item.id}">Remove</button>
        </div>
      `;
      cartItemsContainer.appendChild(cartItem);
    });

    // Calculate totals
    const subtotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    // Render cart summary
    cartSummaryContainer.innerHTML = `
      <div class="summary-row">
        <span class="summary-label">Subtotal:</span>
        <span class="summary-value">${formatPrice(subtotal)}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Shipping:</span>
        <span class="summary-value">Free</span>
      </div>
      <div class="summary-total">
        <span class="total-label">Total:</span>
        <span class="total-value">${formatPrice(subtotal)}</span>
      </div>
      <button id="checkout-btn" class="checkout-btn">Checkout</button>
    `;
  }

  // Open cart
  function openCart() {
    cartOverlay.classList.add("active");
    cartSidebar.classList.add("active");
  }

  // Close cart
  function closeCart() {
    cartOverlay.classList.remove("active");
    cartSidebar.classList.remove("active");
  }

  // Filter products
  function filterProducts(category) {
    activeCategory = category;
    renderProducts();

    // Update active filter button
    filterButtons.forEach((button) => {
      if (button.getAttribute("data-category") === category) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }

  // Search products
  function searchProducts(term) {
    searchTerm = term;
    renderProducts();
  }

  // Go to payment page
  function goToPayment() {
    if (cart.length === 0) return;

    // Check if user is logged in
    if (!isUserLoggedIn) {
      showLoginRequiredPopup();
      return;
    }

    // Hide all sections except payment
    document.querySelectorAll("section").forEach((section) => {
      section.style.display = "none";
    });

    paymentContainer.classList.remove("hidden");
    paymentContainer.style.display = "block";

    // Scroll to top of page
    window.scrollTo(0, 0);

    // Render order items
    renderOrderSummary();
  }

  // Show login required popup - MODIFIED TO REDIRECT TO LOGIN PAGE
  function showLoginRequiredPopup() {
    popupIcon.className = "popup-icon login-required";
    popupIcon.innerHTML = `
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
        <polyline points="10,17 15,12 10,7"></polyline>
        <line x1="15" y1="12" x2="3" y2="12"></line>
      </svg>
    `;
    popupTitle.textContent = "Login Required";
    popupMessage.textContent =
      "You need to login to proceed with checkout. Please login to your account or continue as a guest.";

    // Clear existing actions and add new ones
    popupActions.innerHTML = `
      <button id="popup-guest" class="popup-btn popup-btn-secondary">Continue as Guest</button>
      <button id="popup-login" class="popup-btn popup-btn-primary">Login</button>
    `;

    // Add event listeners for new buttons
    const guestButton = document.getElementById("popup-guest");
    const loginButton = document.getElementById("popup-login");

    guestButton.onclick = () => {
      popupOverlay.classList.remove("active");
      // Continue as guest - proceed to payment
      proceedToPayment();
    };

    // MODIFIED: Redirect to login page instead of simulating login
    loginButton.onclick = () => {
      popupOverlay.classList.remove("active");
      // Redirect to login page
      redirectToLoginPage();
    };

    popupOverlay.classList.add("active");
  }

  // NEW FUNCTION: Redirect to login page
  function redirectToLoginPage() {
    // Store current cart state in localStorage before redirecting
    localStorage.setItem("marketplace_cart", JSON.stringify(cart));
    localStorage.setItem("marketplace_redirect_after_login", "checkout");

    // Redirect to login page
    window.location.href = "login.html";
  }

  // NEW FUNCTION: Check if user returned from login
  function checkLoginReturn() {
    // Check if user just logged in and should be redirected to checkout
    const redirectAfterLogin = localStorage.getItem(
      "marketplace_redirect_after_login"
    );
    const savedCart = localStorage.getItem("marketplace_cart");

    if (redirectAfterLogin === "checkout" && savedCart) {
      // Restore cart
      cart = JSON.parse(savedCart);
      updateCartUI();

      // Set user as logged in
      isUserLoggedIn = true;

      // Clear the redirect flag and saved cart
      localStorage.removeItem("marketplace_redirect_after_login");
      localStorage.removeItem("marketplace_cart");

      // Directly proceed to checkout without popup
      proceedToPayment();
    }
  }

  // Simulate login process (kept for backward compatibility)

  // Proceed to payment (after login or as guest)
  function proceedToPayment() {
    // Hide all sections except payment
    document.querySelectorAll("section").forEach((section) => {
      section.style.display = "none";
    });

    paymentContainer.classList.remove("hidden");
    paymentContainer.style.display = "block";

    // Scroll to top of page
    window.scrollTo(0, 0);

    // Render order items
    renderOrderSummary();
  }

  // Go back to marketplace
  function goBackToMarketplace() {
    showPopup(
      "warning",
      "Confirm Navigation",
      "Are you sure you want to go back? Your payment information will be lost.",
      true,
      () => {
        // Show all sections again
        document.querySelectorAll("section").forEach((section) => {
          section.style.display = "block";
        });

        paymentContainer.classList.add("hidden");
        paymentContainer.style.display = "none";
      }
    );
  }

  // Render order summary in payment page
  function renderOrderSummary() {
    // Render order items
    orderItemsContainer.innerHTML = "";
    cart.forEach((item) => {
      const orderItem = document.createElement("div");
      orderItem.className = "order-item";
      orderItem.innerHTML = `
        <span>${item.name} x${item.quantity}</span>
        <span>${formatPrice(item.price * item.quantity)}</span>
      `;
      orderItemsContainer.appendChild(orderItem);
    });

    // Calculate totals
    const subtotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    // Render order summary
    orderSummaryContainer.innerHTML = `
      <div class="summary-item">
        <span>Subtotal</span>
        <span>${formatPrice(subtotal)}</span>
      </div>
      <div class="summary-item">
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <div class="summary-item">
        <span>Tax</span>
        <span>${formatPrice(tax)}</span>
      </div>
      <div class="summary-item total">
        <span>Total</span>
        <span>${formatPrice(total)}</span>
      </div>
    `;
  }

  // Format card number with spaces
  function formatCardNumber(value) {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return v;
    }
  }

  // Format expiry date
  function formatExpiryDate(value) {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4);
    }
    return v;
  }

  // Show popup function
  function showPopup(type, title, message, showCancel, onConfirm) {
    popupIcon.className = `popup-icon ${type}`;
    popupIcon.innerHTML = getPopupIcon(type);
    popupTitle.textContent = title;
    popupMessage.textContent = message;

    // Reset to default actions
    popupActions.innerHTML = `
      <button id="popup-cancel" class="popup-btn popup-btn-secondary" ${
        showCancel ? "" : 'style="display: none;"'
      }>Cancel</button>
      <button id="popup-confirm" class="popup-btn popup-btn-primary">OK</button>
    `;

    const cancelBtn = document.getElementById("popup-cancel");
    const confirmBtn = document.getElementById("popup-confirm");

    confirmBtn.onclick = () => {
      popupOverlay.classList.remove("active");
      if (onConfirm) onConfirm();
    };

    cancelBtn.onclick = () => {
      popupOverlay.classList.remove("active");
    };

    popupOverlay.classList.add("active");
  }

  // Get popup icon based on type
  function getPopupIcon(type) {
    switch (type) {
      case "error":
        return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>`;
      case "success":
        return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22,4 12,14.01 9,11.01"></polyline>
        </svg>`;
      case "warning":
        return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>`;
      default:
        return "";
    }
  }

  // Event delegation for dynamic content
  document.addEventListener("click", (e) => {
    // Handle add to cart buttons
    if (
      e.target.classList.contains("add-to-cart") ||
      e.target.closest(".add-to-cart")
    ) {
      e.preventDefault();
      const button = e.target.closest(".add-to-cart") || e.target;
      const productId = Number.parseInt(button.getAttribute("data-id"));
      addToCart(productId);
    }

    // Handle checkout button
    if (e.target.id === "checkout-btn") {
      e.preventDefault();
      goToPayment();
    }

    // Handle quantity buttons
    if (e.target.classList.contains("decrease")) {
      const productId = Number.parseInt(e.target.getAttribute("data-id"));
      const item = cart.find((item) => item.id === productId);
      if (item) {
        updateQuantity(productId, item.quantity - 1);
      }
    }

    if (e.target.classList.contains("increase")) {
      const productId = Number.parseInt(e.target.getAttribute("data-id"));
      const item = cart.find((item) => item.id === productId);
      if (item) {
        updateQuantity(productId, item.quantity + 1);
      }
    }

    // Handle remove item
    if (e.target.classList.contains("remove-item")) {
      const productId = Number.parseInt(e.target.getAttribute("data-id"));
      removeFromCart(productId);
    }
  });

  // Initial render
  renderProducts();
  updateCartUI();

  // NEW: Check if user returned from login page
  checkLoginReturn();

  // Event listeners for static elements
  if (cartButton) {
    cartButton.addEventListener("click", openCart);
  }

  if (closeCartButton) {
    closeCartButton.addEventListener("click", closeCart);
  }

  if (cartOverlay) {
    cartOverlay.addEventListener("click", closeCart);
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) =>
      searchProducts(e.target.value)
    );
  }

  if (backToShopButton) {
    backToShopButton.addEventListener("click", goBackToMarketplace);
  }

  // Filter buttons event listeners
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterProducts(button.getAttribute("data-category"));
    });
  });

  // Payment form event listeners
  if (cardNumberInput) {
    cardNumberInput.addEventListener("input", (e) => {
      e.target.value = formatCardNumber(e.target.value);
      if (displayCardNumber) {
        displayCardNumber.textContent = e.target.value || "0000 0000 0000 0000";
      }
    });
  }

  if (expiryDateInput) {
    expiryDateInput.addEventListener("input", (e) => {
      e.target.value = formatExpiryDate(e.target.value);
      if (displayExpiry) {
        displayExpiry.textContent = e.target.value || "MM/YY";
      }
    });
  }

  if (cardholderNameInput) {
    cardholderNameInput.addEventListener("input", (e) => {
      if (displayName) {
        displayName.textContent = e.target.value.toUpperCase() || "YOUR NAME";
      }
    });
  }

  if (fullNameInput) {
    fullNameInput.addEventListener("input", (e) => {});
  }

  if (emailAddressInput) {
    emailAddressInput.addEventListener("input", (e) => {});
  }

  // Payment method selection
  paymentMethods.forEach((method) => {
    method.addEventListener("change", (e) => {
      // Remove active class from all payment methods
      document.querySelectorAll(".payment-method").forEach((pm) => {
        pm.classList.remove("active");
      });

      // Add active class to selected method
      e.target.closest(".payment-method").classList.add("active");

      // Show/hide card details based on selection
      if (e.target.value === "card") {
        cardDetails.style.display = "block";
      } else {
        cardDetails.style.display = "none";
      }
    });
  });

  // Complete payment
  if (completePaymentButton) {
    completePaymentButton.addEventListener("click", () => {
      // Simple validation
      const selectedPayment = document.querySelector(
        'input[name="payment"]:checked'
      );

      if (!selectedPayment) {
        showPopup(
          "error",
          "Payment Failed",
          "Please select a payment method.",
          false
        );
        return;
      }

      if (selectedPayment.value === "card") {
        if (
          !cardNumberInput.value ||
          !expiryDateInput.value ||
          !cvvInput.value ||
          !cardholderNameInput.value ||
          !document.getElementById("full-name").value ||
          !document.getElementById("email-address").value
        ) {
          showPopup(
            "error",
            "Payment Failed",
            "Please fill in all required fields.",
            false
          );
          return;
        }
      }

      // Show success animation
      successAnimation.classList.add("active");

      setTimeout(() => {
        successAnimation.classList.remove("active");

        // Reset cart and go back to marketplace
        cart = [];
        updateCartUI();

        // Show all sections again
        document.querySelectorAll("section").forEach((section) => {
          section.style.display = "block";
        });

        paymentContainer.classList.add("hidden");
        paymentContainer.style.display = "none";

        // Reset form
        const paymentForm = document.getElementById("payment-form");
        if (paymentForm) {
          paymentForm.reset();
        }

        if (displayCardNumber)
          displayCardNumber.textContent = "0000 0000 0000 0000";
        if (displayExpiry) displayExpiry.textContent = "MM/YY";
        if (displayName) displayName.textContent = "YOUR NAME";
      }, 3000);
    });
  }
});
