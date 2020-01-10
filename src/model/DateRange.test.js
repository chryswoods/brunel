
import DateRange from './DateRange';
import RoughDate from './RoughDate';

test("simple", ()=>{
  let a = new DateRange();
  expect(a.hasBounds()).toStrictEqual(false);
  expect(a.hasStart()).toStrictEqual(false);
  expect(a.hasEnd()).toStrictEqual(false);

  a = new DateRange({start:"1850-12-02", end:"1850-12-01"});

  expect(a.getStartDate() < a.getEndDate()).toStrictEqual(true);
  expect(a.hasBounds()).toStrictEqual(true);
  expect(a.hasStart()).toStrictEqual(true);
  expect(a.hasEnd()).toStrictEqual(true);
  expect(a.getEndDate() - a.getStartDate()).toStrictEqual(24*60*60*1000);
  expect(RoughDate.delta(a.getEnd(), a.getStart())).toStrictEqual(24*60*60*1000);
});

test("intersect", ()=>{
  let a = new DateRange({start:"1850-01-31", end:"1850-12-31"});
  let b = new DateRange({start:"1849-01-31", end:"1850-07-31"});
  let intersect = new DateRange({start:"1850-01-31", end:"1850-07-31"}).toString();

  expect(a.intersect(b).toString()).toStrictEqual(intersect);
  expect(b.intersect(a).toString()).toStrictEqual(intersect);

  let union = new DateRange({start:"1849-01-31", end:"1850-12-31"}).toString();
  expect(a.union(b).toString()).toStrictEqual(union);
  expect(b.union(a).toString()).toStrictEqual(union);
});
