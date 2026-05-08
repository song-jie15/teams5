// 统一价格格式化工具

/**
 * 格式化价格为显示格式（保留两位小数）
 * @param price - 价格值，可以是数字、字符串或Decimal对象
 * @returns 格式化后的价格字符串，如 "399.00"
 */
export function formatPrice(price: number | string | any): string {
  if (price == null) return '0.00';

  // 处理Decimal对象
  if (typeof price === 'object' && price !== null && typeof price.toFixed === 'function') {
    return price.toFixed(2);
  }

  // 处理数字和字符串
  const numPrice = typeof price === 'string' ? parseFloat(price) : Number(price);

  if (isNaN(numPrice)) return '0.00';

  return numPrice.toFixed(2);
}

/**
 * 格式化价格为显示格式（带¥符号）
 * @param price - 价格值，可以是数字、字符串或Decimal对象
 * @returns 格式化后的价格字符串，如 "¥399.00"
 */
export function formatPriceWithSymbol(price: number | string | any): string {
  return `¥${formatPrice(price)}`;
}

/**
 * 将价格转换为分（整数）用于存储
 * @param price - 价格值，可以是数字、字符串或Decimal对象
 * @returns 价格的分值表示（整数）
 */
export function priceToCents(price: number | string | any): number {
  if (price == null) return 0;

  // 处理Decimal对象
  if (typeof price === 'object' && price !== null && typeof price.toNumber === 'function') {
    return Math.round(price.toNumber() * 100);
  }

  // 处理数字和字符串
  const numPrice = typeof price === 'string' ? parseFloat(price) : Number(price);

  if (isNaN(numPrice)) return 0;

  return Math.round(numPrice * 100);
}

/**
 * 将分转换为元
 * @param cents - 价格的分值表示（整数）
 * @returns 价格数值
 */
export function centsToPrice(cents: number): number {
  return cents / 100;
}