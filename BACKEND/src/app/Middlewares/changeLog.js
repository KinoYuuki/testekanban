module.exports = (req, res) => {
    const method = req.method === 'DELETE' ? 'Removido' : 'Alterado';
    return console.log(`${res.locals.datetime} - Card ${req.params.id} - ${res.locals.title} - ${method}`);
}