const { createClient } = require('@supabase/supabase-js');
const supabaseUrl = 'https://xyzcompany.supabase.co';
const supabaseKey = 'public-anon-key';
const supabase = createClient(supabaseUrl, supabaseKey);

class Workout {
  static async findAll() {
    let { data, error } = await supabase.from('workouts').select('*');
    if (error) throw error;
    return data;
  }

  static async create(workout) {
    let { data, error } = await supabase.from('workouts').insert([workout]);
    if (error) throw error;
    return data;
  }

  static async update(id, workout) {
    let { data, error } = await supabase.from('workouts').update(workout).eq('id', id);
    if (error) throw error;
    return data;
  }

  static async delete(id) {
    let { data, error } = await supabase.from('workouts').delete().eq('id', id);
    if (error) throw error;
    return data;
  }
}

module.exports = Workout;