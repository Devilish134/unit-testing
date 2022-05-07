import { convertPLNToUSD } from './../convertPLNtoUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });
  it('should return NaN when input is text', () => {
    expect(convertPLNToUSD('1')).toBe(
      'Error, wrong value'
    );
    expect(convertPLNToUSD('abc')).toBe(
      'Error, wrong value'
    );
    expect(convertPLNToUSD('six')).toBe(
      'Error, wrong value'
    );
    expect(convertPLNToUSD('-15')).toBe(
      'Error, wrong value'
    );
  });
  it('should return NaN when input is empty', () => {
    expect(convertPLNToUSD()).toBe(
      'Error, wrong value'
    );
  });
  it('should return Error when input is not string or number', () => {
    expect(convertPLNToUSD({})).toBe(
      'Error, wrong value'
    );
    expect(convertPLNToUSD([])).toBe(
      'Error, wrong value'
    );
    expect(convertPLNToUSD(null)).toBe(
      'Error, wrong value'
    );
    expect(
      convertPLNToUSD(function () {})
    ).toBe('Error, wrong value');
  });
  it('should return 0 when input is negative', () => {
    expect(convertPLNToUSD(-15)).toBe('$0.00');
    expect(convertPLNToUSD(-145.5)).toBe(
      '$0.00'
    );
    expect(convertPLNToUSD(-20)).toBe('$0.00');
  });
});
