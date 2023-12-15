function isUgly(n) {
    if (n <= 0) return false; // Ugly numbers are positive

    // Divide n by 2, 3, and 5 as long as possible
    const primes = [2, 3, 5];
    for (let i = 0; i < primes.length; i++) {
        while (n % primes[i] === 0) {
            n /= primes[i];
        }
    }

    // If n becomes 1, it is an ugly number
    return n === 1;
}